export default class Library {
    constructor(newFamousBook, newBookCount, newHaveFreeSpace) {
        this.famousBook = newFamousBook;
        this.bookCount = newBookCount; 
        this.haveFreeSpace = newHaveFreeSpace;
    } 

    get FamousBook() {
        return this.famousBook;
    }
    set FamousBook(value) {
        this.famousBook = value;
    }   

    get BookCount() {
        return this.bookCount;
    }

    set BookCount(value) {
        if(value > 0) {
            this.bookCount = value;
        }
    }

    get HaveFreeSpace() {
        return this.haveFreeSpace;
    }

    set HaveFreeSpace(value) {
        this.haveFreeSpace = value;
    }
    
    show() {
        console.log(`${this.famousBook} ${this.bookCount} ${this.haveFreeSpace}`);
    }

    copy() {
        return this;
    }

    delete() {
        this.deleted = true;
    }

    #AddNewBook() {
        if(this.haveFreeSpace == true){
            this.bookCount++;
        }
        else{
            console.log("So much books in library");
        }   
    }
    
    clone() {
        return Library(this.famousBook,this.bookCount,this.haveFreeSpace);
    }
}