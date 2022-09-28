import { archiveIcon, unarchiveIcon, editIcon, deleteIcon, ideaIcon, quoteIcon, taskIcon, thoughtIcon } from './js/svgs.js';
// import *  from './scripts/svgs.js';
import { loadDataIntoTables,
    loadIconsIntoHeader,
    switchTables,
    refreshTables,
    openForm,
    loadLocalData} from './js/functions.js';
import { buildForm } from './js/HTMLBuilder.js';

loadIconsIntoHeader( archiveIcon, deleteIcon );
