import { LoggerBaseMessages, LoggerLevels } from '~/application/enums/plugins/logger'
import type ILogger from '~/application/interfaces/plugins/ILogger'


class Logger implements ILogger {
  private _level: LoggerLevels

  constructor(level = LoggerLevels.LOG) {
    this._level = level
  }

  get level(): LoggerLevels {
    return this._level
  }

  set level(level: LoggerLevels) {
    this._level = level
  }

  validate(level: LoggerLevels, force?: boolean) {

    if (force)
      return true

    if (level < this._level)
      return false

    return true
  }

  time(func: Function): void {
    console.time()
    func()
    console.timeEnd()
  }

  debug(...messages: string[]): void {
    if (this.validate(LoggerLevels.DEBUG))
      console.log(LoggerBaseMessages.DEBUG, ...messages)
  }

  log(...messages: string[]): void {
    if (this.validate(LoggerLevels.LOG))
      console.log(LoggerBaseMessages.LOG, ...messages)
  }

  force(...messages: string[]): void {
    console.log(LoggerBaseMessages.FORCE, ...messages)
  }

  warn(...messages: string[]): void {
    if (this.validate(LoggerLevels.WARN))
      console.log(LoggerBaseMessages.WARN, ...messages)
  }

  error(...messages: string[]): void {
    if (this.validate(LoggerLevels.ERROR))
      console.log(LoggerBaseMessages.ERROR, ...messages)
  }

  info(...messages: string[]): void {
    if (this.validate(LoggerLevels.INFO))
      console.log(LoggerBaseMessages.INFO, ...messages)
  }

  clear(): void {
    console.clear()
  }

}

export default defineNuxtPlugin(() => {
  const _logger = new Logger()

  return {
    provide: {
      logger: _logger
    }
  }
})