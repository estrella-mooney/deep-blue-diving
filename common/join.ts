export interface JoinInfo {
  dive_id: number
  diver_id: number
}

export interface Join extends JoinInfo {
  id: number
}

export interface DiverName {
  id: number
  name: string
}

export interface DiveTitle {
  id: number
  title: string
}
