import {validateCatalog, records} from './catalog.js';
validateCatalog();
console.log(`Validated ${records.length} versioned research records and their evidence links.`);
