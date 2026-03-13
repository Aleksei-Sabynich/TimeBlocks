export type EventYear = {
  date: number
  description: string
}

export type EventItem = {
  id: number
  title: string
  year_start: number
  year_end: number
  events: EventYear[]
}