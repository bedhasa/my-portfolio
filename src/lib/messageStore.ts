// src/lib/messageStore.ts
import fs from "fs";
import path from "path";

export interface Message {
  name: string;
  content: string;
  date: string;
}

const MAX_MESSAGES = 5;

// Path to the JSON file used for persistence
const dataDir = path.join(process.cwd(), "data");
const dataFile = path.join(dataDir, "messages.json");

function ensureFile() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(dataFile)) {
    fs.writeFileSync(dataFile, JSON.stringify([]), "utf-8");
  }
}

function readMessages(): Message[] {
  try {
    ensureFile();
    const raw = fs.readFileSync(dataFile, "utf-8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeMessages(messages: Message[]) {
  try {
    ensureFile();
    fs.writeFileSync(dataFile, JSON.stringify(messages, null, 2), "utf-8");
  } catch {
    // Ignore write errors
  }
}

export function getMessages(): Message[] {
  return readMessages().slice(0, MAX_MESSAGES);
}

export function addMessage(message: Message): Message[] {
  const current = readMessages();
  current.unshift(message);
  const trimmed = current.slice(0, MAX_MESSAGES);
  writeMessages(trimmed);
  return trimmed;
}
