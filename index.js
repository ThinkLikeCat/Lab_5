import LibraryCabinet from "./LibraryCabinet.js";
const cabinet1 = new LibraryCabinet("Romeo", 12, false, 4);
const cabinet2 = new LibraryCabinet("Master", 32, true, 7);
cabinet1.show();
cabinet2.show();
//Я установил в папку для запуска на локальном сервере http-server, он запускается по этой же команде по стандртному порту локалхоста - 8080