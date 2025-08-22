/**
 * German messages for HTTP status codes
 */
export const deMessages = {
  // 2xx Success
  200: 'Die Anfrage war erfolgreich',
  201: 'Die Anfrage wurde erfüllt und eine neue Ressource wurde erstellt',
  202: 'Die Anfrage wurde zur Verarbeitung angenommen',
  204: 'Der Server hat die Anfrage erfolgreich verarbeitet, gibt aber keinen Inhalt zurück',

  // 3xx Redirection
  301: 'Die angeforderte Ressource wurde dauerhaft verschoben',
  302: 'Die angeforderte Ressource befindet sich vorübergehend unter einer anderen URI',
  304: 'Die Ressource wurde seit der letzten Anfrage nicht verändert',

  // 4xx Client Error
  400: 'Der Server kann die Anfrage aufgrund eines Client-Fehlers nicht verarbeiten',
  401: 'Authentifizierung ist erforderlich und ist fehlgeschlagen oder wurde nicht bereitgestellt',
  403: 'Der Server verstand die Anfrage, verweigert aber die Autorisierung',
  404: 'Die angeforderte Ressource konnte nicht gefunden werden',
  405: 'Die Anfragemethode ist für diese Ressource nicht erlaubt',
  409: 'Die Anfrage steht in Konflikt mit dem aktuellen Zustand der Ressource',
  410: 'Die angeforderte Ressource ist nicht mehr verfügbar',
  422: 'Die Anfrage war wohlgeformt, enthält aber semantische Fehler',
  429: 'Der Benutzer hat zu viele Anfragen in einer bestimmten Zeit gesendet',

  // 5xx Server Error
  500: 'Der Server ist auf eine unerwartete Bedingung gestoßen',
  501: 'Der Server unterstützt die erforderliche Funktionalität nicht',
  502: 'Der Server erhielt eine ungültige Antwort vom Upstream-Server',
  503: 'Der Server ist derzeit nicht verfügbar',
  504: 'Der Server erhielt keine rechtzeitige Antwort vom Upstream',
};
