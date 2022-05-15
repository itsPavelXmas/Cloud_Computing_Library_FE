Proiect Cloud Computing – Library With Friends- Documentatie

Titlu al aplicatiei: Library with Friends
Nume si prenume student: Craciun Pavel-Cristian
Grupa:1117
Link Catre aplicatie Heroku: https://immense-temple-57554.herokuapp.com/ 
Back-end repository: https://github.com/itsPavelXmas/Cloud_Computing_Librarie
Front-end repository: https://github.com/itsPavelXmas/Cloud_Computing_Library_FE
Link Video https://www.youtube.com/watch?v=ybRrvy8Sh04&ab_channel=Pavone
Introducere

Aceasta aplicatie reprezinta o platforma de librarie unde cartile ce sunt evidentiate pot fi trimise pe mail prietenilor pentru a starni curiozitatea despre acestea. Aplicatia a fost create utilizand Node.Js, Express, React.js, MySql, Google Translate API, SendGrid si Text-to-Speech Google API. Aspectul este unul minimalist folosind HTML si CSS. Totodata, aceasta a fost hostata pe Heroku.
Servicii

Serviciile folosite in Cloud prezente in acest proiect sunt Google Translate API si Text-to-Speech API folosind Google Cloud Platform. Totodata, Layerul de persistenta este evidentiat de o baza de date MySql stocata in Google Cloud Platform, deoarece am ales sa nu folosesc o baza de date locala. Pentru partea de mail uri am folosit SendGrid pentru ca utilizatorii sa impartaseasca cu prietenii acestora entuziasmul pentru o anumita carte.

API
Text-to-Speech API de la Google este ideal pentru orice aplicație care redă sunetul vorbirii umane către utilizatori. Acesta permite să convertim șiruri, cuvinte și propoziții arbitrare în sunetul unei persoane care vorbește aceleași lucruri. Aplicația poate efectua o acțiune și apoi poate oferi utilizatorului vorbire umană ca feedback. Din acest motiv am ales ca pentru descrierea unei carti sa poata fi citita de un “asistent”. 
Google Translate API de la Google pentru a putea traduce mail ul intr-o limba anume ce va fi trimis unui utilizator fiind folosit impreuna cu SMPT-ul de la SendGrid

Flux de date

Aplicatia este una CRUD iar baza de date MySql unde pastram datele despre Carti( titlu, autor, editura) descriere_carte( descriere si id-ul cartii afferent), mesajele ( nume, mail – distribuitor, mail- prieten si continutul mail ului).
Capturi ecrane

![http1](https://user-images.githubusercontent.com/72074376/168486224-42730169-32de-4daa-9214-c5ea586e9b8d.png)
![http2](https://user-images.githubusercontent.com/72074376/168486364-d2873c61-533a-4c4a-94b8-466a279a788e.png)
![http3](https://user-images.githubusercontent.com/72074376/168486366-d82bafa7-4825-47f7-81f6-a30e9fe6c5db.png)
![http4](https://user-images.githubusercontent.com/72074376/168486367-43c95156-a158-48c5-9330-62acf958e42f.png)



Interfata
 ![interfata](https://user-images.githubusercontent.com/72074376/168486378-2e8c62cb-a215-4b79-ac05-c6e0697b2525.png)

Mail
![Mail](https://user-images.githubusercontent.com/72074376/168486383-c7535e62-2a73-4906-9d93-e09b1112035a.png)


