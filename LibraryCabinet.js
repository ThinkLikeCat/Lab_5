import Library from "./Library.js";

export default class LibraryCabinet extends Library {
    constructor(famousBook, bookCount, haveFreeSpace, shelfCount) {
        super(famousBook, bookCount, haveFreeSpace);
        this.shelfCount = shelfCount;
    } 
    
    get ShelfCount() {
        return this.shelfCount;
    }

    set ShelfCount(shelfCount) {
        if (shelfCount >= 0) {
            this.shelfCount = shelfCount;
        }
    }
}