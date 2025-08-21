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
}`
  },
  {
    name: "Web Server",
    code: `#include <WiFi.h>

void setup() {
  Serial.begin(115200);
  Serial.println("Starting Web Server...");
}

void loop() {
  // Web server loop
}`
  }
];
