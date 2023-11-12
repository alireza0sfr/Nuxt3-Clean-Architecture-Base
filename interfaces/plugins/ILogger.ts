import { LoggerBaseMessages, LoggerLevels } from '~/enums/plugins/logger'

export default interface ILogger {

  get level(): LoggerLevels
  set level(level: LoggerLevels)
  validate(level: LoggerLevels, force?: boolean): boolean
  time(func: Function): void
  debug(...messages: string[]): void
  log(...messages: string[]): void
  force(...messages: string[]): void
  warn(...messages: string[]): void
  error(...messages: string[]): void
  info(...messages: string[]): void
  clear(): void
}
