interface ImportMetaEnv {
    readonly VITE_APP_URL: string;
    // add more environment variables as needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  