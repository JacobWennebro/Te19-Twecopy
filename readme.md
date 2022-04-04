# TweCopy Post Mortem

Jacob Wennebro (2022-04-04)

## Inledning

Syftet med detta arbete var att skapa en simpel sida för att kunna skapa och visa meddelanden på en webbplats i form utav "meeps".

## Bakgrund

Meeps kan publiceras på webbplatsen med hjälp utav sidans grafiska gränssnitt som skickar en förfrågan åt webbplatsens server.

När servern får en förfrågan om att skapa en ny meep så validerar den förfrågans data och utifrån det avgör ifall den är korrekt. Om datan är korrekt så kommer servern spara ned datan i databasen så att sidan kan visa den.

En meep inuti databasen innehåller ett meddelande, en färg, ett datum och ett id.


## Positiva erfarenheter

Det har gått bra med att få min server till att prata med min MySQL databas, något som jag aldrig tidigare gjort då jag mestadels använt mig utav NoSQL databaser såsom MongoDB.

Överlag känns det som det har flytit på bra.

## Negativa erfarenheter

Medan gränsnittet fungerar precis som det ska så skulle det kunna se bättre ut, även om jag hade större fokus på sidans funktionalitet över visuell design.

## Sammanfattning

Det finns definitivt plats för att vidare utveckla detta projekt. Kanske t.ex länka meeps till konton som laddat upp dem till sidan och på så sätt kanske tillåta användare att redigera eller ta bort sina meeps.