export const examples = [
  {
    name: "Blink",
    code: `void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}`,
  },
  {
    name: "WiFi Scanner",
    code: `#include <WiFi.h>
void setup() {
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(100);
}
void loop() {
  int n = WiFi.scanNetworks();
  for (int i = 0; i < n; i++) {
    Serial.println(WiFi.SSID(i));
  }
  delay(5000);
}`,
  },
  {
    name: "Web Server",
    code: `#include <WiFi.h>
#include <WebServer.h>
WebServer server(80);
void setup() {
  WiFi.begin("SSID", "PASSWORD");
  while (WiFi.status() != WL_CONNECTED) delay(1000);
  server.on("/", []() { server.send(200, "text/plain", "Hello World"); });
  server.begin();
}
void loop() {
  server.handleClient();
}`,
  },
];
