### Epics, User stories och tasks

DoD - Definition of done

En Epic är “done” när dess user stories är “done”

En User story är “done” när alla user storyns tasks är avklarade.

Ett task är “done” när den uppfyller sina specifika acceptance criteria. 

#### Tasks Skall följa **SMART**

* **Specific** (Implement function xyz())<br>
* **Measurable** (Can the progress of this task be measured)<br>
* **Achievable** (What is supposed to be done should be clearly defined)<br>
* **Relevant** (Should be relevant to the user storys scope)<br>
* **Time bound** (Finished on date xyz)<br>

#### User stories skall följa **INVEST**

* **Independent** (from other US, should be possible to implement in any order) <br>
* **Negotiable** (Invitation to a conversation, can be changed, redacted) <br>
* **Valuable** <br>
* **Small** <br>
* **Testable** (There must be a way to test if the story is done) <br>

### Konventioner
* Skriv kommentarer, variabel, klass, directory, dokumentation på Engelska och i camelcase. Packages skall skrivas i lowercase.
* Variabelnamn, klassnamn och metodnamn skall vara beskrivande, inte tvetydiga och skall helst inte innehålla förkortningar.
* Kommentarer i kod skall skrivas enligt JsDoc (https://jsdoc.app/about-getting-started), alla klasser och metoder skall kommenteras. 
* Pull request dokumentation (när man mergar sin branhch med main) skall skrivas på formen vad, hur, varför.
* Alla commit-meddelanden skall beskriva vad som ändrats/lagts till. Är det mycket förändringar bör man stagea commitsen i flera steg och inte commita allt på en gång.
* Issues skall följa templatesen som finns i .github/ISSUE_TEMPLATE

### Exempel (JavaScript)
````js

    class Book {
        
        /**
         * Represents a book
         * @constructor 
         * @param {str} title the title of the book
         * @param {int} year the year the book was published
         * @param {int} pages the number of pages in the book */
        constructor(title, year, pages) {
            this.title = title
            this.year = year
            this.pages = pages
        }
    }

    /**
     * The number of pages in a book
     * @param {str} bookTitle the title of the book
     * @returns {int} the number of pagens in the book in int's */
    function getBookPages(bookTitle) {
        ...
    }

````

### Exempel projekt med Next.js
Finns på GitHub repot: <br>
https://github.com/vercel/next-learn/tree/main/basics/learn-starter <br>
tagen från guiden: <br>
https://nextjs.org/learn-pages-router/basics/create-nextjs-app/setup

### Hur skapar man ett issue?
1. Klicka på issues på GitHub.
2. Klicka på New issue.
3. Välj template och fyll i.
4. Välj rätt labels.
5. Assigna dig själv (och eventuellt andra) till issuet.
6. Lägg till issuet i Project.
7. Lägg till issuet i Milestone (om en sådan finns, t.ex MVP).
8. Klicka på submit new issue.
9. Under tabben Development lägg till en branch som refererar till issuet.
10. Klart att börja jobba med issuet på din branch!

### Testning
Målbilden är att alla klasser skall ha en testklass, alla publika metoder i klassen skall ha ett test. Om något ej går att testa skriv en kommentar om varför det inte går att testa. Abstrakta klasser skall testas med privata inre klasser i testklassen.
