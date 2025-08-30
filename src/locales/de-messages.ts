/**
 * German messages for HTTP status codes
 */
export const deMessages = {
  // 2xx Success
  200: 'Die Anfrage war erfolgreich',
  201: 'Die Anfrage wurde erfüllt und eine neue Ressource wurde erstellt',
  202: 'Die Anfrage wurde zur Verarbeitung angenommen',
  204: 'Der Server hat die Anfrage erfolgreich verarbeitet, gibt aber keinen Inhalt zurück',
  206: 'Der Server liefert nur einen Teil der Ressource aufgrund eines vom Client gesendeten Range-Headers',

  // 3xx Redirection
  301: 'Die angeforderte Ressource wurde dauerhaft verschoben',
  302: 'Die angeforderte Ressource befindet sich vorübergehend unter einer anderen URI',
  304: 'Die Ressource wurde seit der letzten Anfrage nicht verändert',
  307: 'Die Anfrage sollte mit einer anderen URI wiederholt werden, aber zukünftige Anfragen sollten weiterhin die ursprüngliche URI verwenden',
  308: 'Die Anfrage und alle zukünftigen Anfragen sollten mit einer anderen URI wiederholt werden',

  // 4xx Client Error
  400: 'Der Server kann die Anfrage aufgrund eines Client-Fehlers nicht verarbeiten',
  401: 'Authentifizierung ist erforderlich und ist fehlgeschlagen oder wurde nicht bereitgestellt',
  403: 'Der Server verstand die Anfrage, verweigert aber die Autorisierung',
  404: 'Die angeforderte Ressource konnte nicht gefunden werden',
  405: 'Die Anfragemethode ist für diese Ressource nicht erlaubt',
  406: 'Die angeforderte Ressource kann nur Inhalte generieren, die nach den Accept-Headern nicht akzeptabel sind',
  408: 'Der Server wartete zu lange auf die Anfrage',
  409: 'Die Anfrage steht in Konflikt mit dem aktuellen Zustand der Ressource',
  410: 'Die angeforderte Ressource ist nicht mehr verfügbar',
  411: 'Die Anfrage hat die Länge ihres Inhalts nicht angegeben, die von der angeforderten Ressource benötigt wird',
  412: 'Der Server erfüllt eine der Vorbedingungen nicht, die der Anforderer in die Anfrage gestellt hat',
  413: 'Die Anfrage ist größer als der Server bereit oder in der Lage ist zu verarbeiten',
  414: 'Die bereitgestellte URI war zu lang für den Server zum Verarbeiten',
  415: 'Die Anfrage-Entität hat einen Medientyp, den der Server oder die Ressource nicht unterstützt',
  416: 'Der Client hat um einen Teil der Datei gebeten, aber der Server kann diesen Teil nicht bereitstellen',
  417: 'Der Server kann die Anforderungen des Expect-Request-Header-Felds nicht erfüllen',
  418: 'Jeder Versuch, Kaffee mit einer Teekanne zu brühen, sollte zum Fehlercode 418 Ich bin eine Teekanne führen',
  422: 'Die Anfrage war wohlgeformt, enthält aber semantische Fehler',
  426: 'Der Client sollte zu einem anderen Protokoll wie TLS/1.0 wechseln, das im Upgrade-Header-Feld angegeben ist',
  428: 'Der Origin-Server erfordert, dass die Anfrage bedingt ist',
  429: 'Der Benutzer hat zu viele Anfragen in einer bestimmten Zeit gesendet',
  431: 'Der Server ist nicht bereit, die Anfrage zu verarbeiten, weil ein einzelnes Header-Feld oder alle Header-Felder zusammen zu groß sind',
  451: 'Ein Server-Betreiber hat eine rechtliche Forderung erhalten, den Zugang zu einer Ressource oder zu einem Satz von Ressourcen zu verweigern, der die angeforderte Ressource enthält',

  // 5xx Server Error
  500: 'Der Server ist auf eine unerwartete Bedingung gestoßen',
  501: 'Der Server unterstützt die erforderliche Funktionalität nicht',
  502: 'Der Server erhielt eine ungültige Antwort vom Upstream-Server',
  503: 'Der Server ist derzeit nicht verfügbar',
  504: 'Der Server erhielt keine rechtzeitige Antwort vom Upstream',
  505: 'Der Server unterstützt die in der Anfrage verwendete HTTP-Protokoll-Version nicht',
  511: 'Der Client muss sich authentifizieren, um Netzwerkzugang zu erhalten',
};
