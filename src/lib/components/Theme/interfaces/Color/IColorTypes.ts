export interface IColorTypes<T, > {
  primary: T,
  secondary: T,
  error: T,
  warning: T,
  info: T,
  success: T,
  background: {
    default: T,
    paper: T
  },
  black: string
  white: string
}
