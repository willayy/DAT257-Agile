### Epics, User stories och tasks

DoD - Definition of done

En Epic är “done” när dess user stories är “done”

En User story är “done” när alla user storyns tasks är avklarade.

Ett task är “done” när den uppfyller sina specifika acceptance criteria. 

#### Tasks Skall följa SMART

Specific <br>
Measurable <br>
Achievable <br>
Relevant <br>
Time bound <br>

#### User stories skall följa INVEST

Independent (from other US, should be possible to implement in any order) <br>
Negotiable (Invitation to a conversation, can be changed, redacted) <br>
Valuable <br>
Small <br>
Testable (There must be a way to test if the story is done) <br>

### Konventioner som skall följas
* Skriv kommentarer, variabel, klass, directory, dokumentation på Engelska och i camelcase. Packages skall skrivas i lowercase.
* Kommentarer i kod skall skrivas enligt Javadoc, alla klasser och metoder skall kommenteras. 
* Pull requsts dokumentation skall skrivas på formen vad, hur, varför.
* Alla commit-meddelanden skall beskriva vad som ändrats/lagts till. Är det mycket förändringar bör man stagea commitsen i flera steg.
* Issues skall följa templatesen som finns i .github/ISSUE_TEMPLATE

### Testning
Målbilden är att alla klasser skall ha en testklass, alla publika metoder i klassen skall ha ett test. Om något ej går att testa skriv en kommentar om varför det inte går att testa. Abstrakta klasser skall testas med privata inre klasser i testklassen.
