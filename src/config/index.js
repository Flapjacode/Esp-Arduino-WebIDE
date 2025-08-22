// src/config/index.js

export const boards = [
    "Arduino Uno",
    "Arduino Nano",
    "ESP32 DevKit",
    "ESP8266 NodeMCU",
  ];
  
  export const mockLibraries = [
    "Wire",
    "SPI",
    "Servo",
    "Adafruit_Sensor",
    "WiFi",
  ];
  
  export const DEFAULT_CODE = `\
  void setup() {
    Serial.begin(9600);
  }
  
  void loop() {
    Serial.println("Hello, Arduino!");
    delay(1000);
  }
  `;
  