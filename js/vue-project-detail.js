const { createApp } = Vue;

createApp({
  data() {
    return {
      project: null,
      projectId: null,
      loading: true,
      error: null
    };
  },
  
  mounted() {
    // Get the project ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    this.projectId = urlParams.get('id');
    
    if (!this.projectId) {
      this.error = 'No project ID specified';
      this.loading = false;
      return;
    }
    
    this.fetchProjectDetails();
  },
  
  methods: {
    async fetchProjectDetails() {
      try {
        const response = await fetch('data/projects.json');
        if (!response.ok) {
          throw new Error('Failed to fetch projects data');
        }
        
        const data = await response.json();
        const project = data.projects.find(p => p.id === this.projectId);
        
        if (!project) {
          throw new Error('Project not found');
        }
        
        this.project = project;
        document.title = `${project.title} - My Portfolio`;
        this.loading = false;
      } catch (error) {
        console.error('Error loading project details:', error);
        this.error = error.message;
        this.loading = false;
      }
    }
  }
}).mount('#app');