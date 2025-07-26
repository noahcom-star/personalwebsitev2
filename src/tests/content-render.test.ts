import { describe, it, expect } from 'vitest';
import { projects, substack, obsessions } from '../data/content';

describe('Content Data Structure', () => {
  describe('Projects Data', () => {
    it('should have projects array with required fields', () => {
      expect(Array.isArray(projects)).toBe(true);
      expect(projects.length).toBeGreaterThan(0);
      
      projects.forEach((project, index) => {
        expect(project).toHaveProperty('title');
        expect(project).toHaveProperty('description');
        expect(project).toHaveProperty('link');
        expect(project).toHaveProperty('tech');
        expect(project).toHaveProperty('github');
        
        expect(typeof project.title).toBe('string');
        expect(typeof project.description).toBe('string');
        expect(typeof project.link).toBe('string');
        expect(typeof project.github).toBe('string');
        expect(Array.isArray(project.tech)).toBe(true);
        
        expect(project.title.length).toBeGreaterThan(0);
        expect(project.description.length).toBeGreaterThan(0);
        expect(project.link.length).toBeGreaterThan(0);
        expect(project.tech.length).toBeGreaterThan(0);
      });
    });

    it('should have at least 3 projects', () => {
      expect(projects.length).toBeGreaterThanOrEqual(3);
    });

    it('should have projects with valid URLs', () => {
      projects.forEach(project => {
        // Basic URL validation
        expect(project.link).toMatch(/^https?:\/\/.+/);
        expect(project.github).toMatch(/^https?:\/\/.+/);
      });
    });
  });

  describe('Substack Data', () => {
    it('should have substack object with required fields', () => {
      expect(typeof substack).toBe('object');
      expect(substack).toHaveProperty('url');
      expect(substack).toHaveProperty('blurb');
      expect(substack).toHaveProperty('stats');
      
      expect(typeof substack.url).toBe('string');
      expect(typeof substack.blurb).toBe('string');
      expect(typeof substack.stats).toBe('object');
      
      expect(substack.url.length).toBeGreaterThan(0);
      expect(substack.blurb.length).toBeGreaterThan(0);
    });

    it('should have valid URL', () => {
      expect(substack.url).toMatch(/^https?:\/\/.+/);
    });

    it('should have stats with numeric values', () => {
      expect(substack.stats).toHaveProperty('subscribers');
      expect(substack.stats).toHaveProperty('articles');
      expect(substack.stats).toHaveProperty('schedule');
      
      expect(typeof substack.stats.subscribers).toBe('string');
      expect(typeof substack.stats.articles).toBe('string');
      expect(typeof substack.stats.schedule).toBe('string');
    });
  });
});

describe('Content Rendering', () => {
  describe('Projects Component Data Integration', () => {
    it('should have accessible project data for component rendering', () => {
      const firstProject = projects[0];
      
      // Test that we can access all required data for rendering
      expect(firstProject.title).toBeTruthy();
      expect(firstProject.description).toBeTruthy();
      expect(firstProject.tech).toBeTruthy();
      expect(firstProject.link).toBeTruthy();
      expect(firstProject.github).toBeTruthy();
      
      // Test that tech array has valid values
      expect(firstProject.tech.every(tech => typeof tech === 'string' && tech.length > 0)).toBe(true);
    });

    it('should have project titles that are unique', () => {
      const titles = projects.map(p => p.title);
      const uniqueTitles = new Set(titles);
      expect(uniqueTitles.size).toBe(titles.length);
    });

    it('should have well-formed project descriptions', () => {
      projects.forEach(project => {
        expect(project.description.length).toBeGreaterThan(20);
        expect(project.description.length).toBeLessThan(200);
      });
    });
  });

  describe('Substack Component Data Integration', () => {
    it('should have accessible substack data for component rendering', () => {
      expect(substack.blurb).toBeTruthy();
      expect(substack.url).toBeTruthy();
      expect(substack.stats.subscribers).toBeTruthy();
      expect(substack.stats.articles).toBeTruthy();
      expect(substack.stats.schedule).toBeTruthy();
    });

    it('should have well-formed blurb', () => {
      expect(substack.blurb.length).toBeGreaterThan(50);
      expect(substack.blurb.length).toBeLessThan(500);
    });
  });

  describe('Obsessions Component Data Integration', () => {
    it('should have accessible obsessions data for component rendering', () => {
      expect(obsessions.books).toBeTruthy();
      expect(obsessions.people).toBeTruthy();
      expect(obsessions.rabbitHoles).toBeTruthy();
      expect(obsessions.doodleUrl).toBeTruthy();
      
      expect(Array.isArray(obsessions.books)).toBe(true);
      expect(Array.isArray(obsessions.people)).toBe(true);
      expect(Array.isArray(obsessions.rabbitHoles)).toBe(true);
      
      expect(obsessions.books.length).toBeGreaterThan(0);
      expect(obsessions.people.length).toBeGreaterThan(0);
      expect(obsessions.rabbitHoles.length).toBeGreaterThan(0);
    });

    it('should have well-formed obsessions content', () => {
      // Books should have author information
      obsessions.books.forEach(book => {
        expect(book.length).toBeGreaterThan(10);
        expect(book).toMatch(/.+ - .+/); // Should have "Title - Author" format
      });

      // People should have descriptions
      obsessions.people.forEach(person => {
        expect(person.length).toBeGreaterThan(15);
        expect(person).toMatch(/.+ - .+/); // Should have "Name - Description" format
      });

      // Rabbit holes should be descriptive
      obsessions.rabbitHoles.forEach(hole => {
        expect(hole.length).toBeGreaterThan(20);
        expect(hole).toMatch(/.+ - .+/); // Should have "Topic - Description" format
      });
    });

    it('should have valid doodle URL', () => {
      expect(obsessions.doodleUrl).toMatch(/^https?:\/\/.+/);
    });
  });
});

describe('Data Export Validation', () => {
  it('should export required data structures', () => {
    expect(projects).toBeDefined();
    expect(substack).toBeDefined();
    expect(obsessions).toBeDefined();
  });

  it('should have consistent data types', () => {
    // All projects should have same structure
    const firstProject = projects[0];
    const expectedKeys = Object.keys(firstProject).sort();
    
    projects.forEach(project => {
      const projectKeys = Object.keys(project).sort();
      expect(projectKeys).toEqual(expectedKeys);
    });
  });

  it('should be ready for future data additions', () => {
    // Test that the module structure allows for future exports
    const contentModule = require('../data/content');
    expect(typeof contentModule).toBe('object');
    expect(contentModule.projects).toBeDefined();
    expect(contentModule.substack).toBeDefined();
    expect(contentModule.obsessions).toBeDefined();
    
    // Should be able to add bio, experience, etc. in the future
  });
}); 