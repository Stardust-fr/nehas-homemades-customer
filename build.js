// build.js
const fs = require('fs');

const config = `// Auto-generated at build time
window.NEHA_CONFIG = {
  SUPABASE_URL: "${process.env.SUPABASE_URL}",
  SUPABASE_ANON_KEY: "${process.env.SUPABASE_ANON_KEY}",
  WHATSAPP_NUMBER: "${process.env.WHATSAPP_NUMBER}"
};
`;

fs.writeFileSync('neha_config.js', config);
console.log('✓ neha_config.js generated from environment variables');