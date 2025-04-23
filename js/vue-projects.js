const { createApp } = Vue;

createApp({
  data() {
    return {
      projects: [],
      loading: true,
      error: null
    };
  },
  
  mounted() {
    this.fetchProjects();
  },
  
  methods: {
    async fetchProjects() {
      try {
        const response = await fetch('data/projects.json');
        if (!response.ok) {
          throw new Error('Failed to fetch projects data');
        }
        
        const data = await response.json();
        this.projects = data.projects;
        this.loading = false;
      } catch (error) {
        console.error('Error loading projects:', error);
        this.error = error.message;
        this.loading = false;
      }
    }
  }
}).mount('#app');