# SvWebsite

Hallo! Das ist die Github Seite der Sv-Website. Es gibt sogar eine automatisch generierte Dokumentation (Juhu!). Die ist im Ordner "documentation" zu finden und kann mit jedem HTML Server gestartet werden. Die Dokumentation kann automatisch mit: `npm run compodoc` generiert werden.
Wunderbarerweise hatte ich irgendwann keine Lust mehr Kommentare zu schreiben und irgendwann habe ich auch angefangen einfach Features unschön zusammen zu kleben ohne die schön zu implementieren.
Trotzdem ein paar hilfreiche Informationen, falls jemals jemand so wahrsinnig sein sollte, sich nochmal der Website anzunehmen:

## Namen

c steht für Component
s steht für Service
i steht für Interface

## Struktur

Es gibt einen generic Service, der für die Kommunikation mit der Datenbank zuständig ist.
Der erbt von der Message Klasse und ist für die Benutzerbenachrichtigungen verantwortlich.

## Ein schnelles Wort zum loader Service

Der loader Service funktioniert nicht, so wie er soll. Damit er funktioniert empfehle ich einen [async-loader Decorator] (https://gist.github.com/Morstis/c1963fd565d8b234871ae6662a11c8af)

Der Decorator müsste dann nur noch vor jede async Funktion geschrieben werden:

```@asyncLoader()
	public async signIn(formValue: LoginForm): Promise<void> {
		await this.afAuth.signInWithEmailAndPassword(
		formValue.email,
		formValue.passwort
		);
	}
```

## functions

Das Firebase Backend funktioniert einwandfrei. Leider erlaubt Firebase das Backend nur, wenn man den Pay-as-you-go Tarif verwendet. Da ich nicht einen Ansturm auf die Website erwarte, bin ich beim Sparkle Tarif geblieben. Dadurch kann ich das wunderbare Backend nicht benutzen und der gesamte Inhalt in "functions" ist irrelevant. Dadurch funktioniert auch die linke Seite des Admin Interfaces nicht. Wenn das geändert werden soll, müsste das Projekt bei Firebase geupgradet werden.

## lazy loading

Die meisten Module werden mit [lazy loading] (https://angular.io/guide/lazy-loading-ngmodules) geladen.

## Das war's

Bei Fragen kann man mich gerne anschreiben: lucas.wiese@gmx.de
