export type TableProps = {
  data?: TableDataTypes[]
  selectedFilters?: string
  sortBy?: string
  sortDir?: string
  onSort?: (value: string) => void
}

export type ColumnsDefTypes = {
  id: number
  bold: string
  normal: string
  name: string
  translationId: number
  sortable: boolean
}

export type ScrollBarProps = {
  ref: string
  width: number
}

export type TableDataTypes = {
  POOL: string
  APY: string
  EARNED: string
  STAKED: string
  DETAILS: string
  LINKS: string
}

export const ColumnsDef: ColumnsDefTypes[] = [
  {
    id: 0,
    bold: '',
    normal: '',
    name: 'icon',
    translationId: 999,
    sortable: false,
  },
  {
    id: 1,
    bold: '',
    normal: 'Farm',
    name: 'farm',
    translationId: 999,
    sortable: true,
  },
  {
    id: 2,
    bold: '',
    normal: 'APR',
    name: 'apr',
    translationId: 999,
    sortable: true,
  },
  {
    id: 3,
    bold: 'CAKE',
    normal: 'EARNED',
    name: 'earned',
    translationId: 999,
    sortable: true,
  },
  {
    id: 4,
    bold: 'LP TOKENS',
    normal: 'STAKED',
    name: 'staked',
    translationId: 999,
    sortable: true,
  },
  {
    id: 5,
    bold: '',
    normal: 'DETAILS',
    name: 'details',
    translationId: 999,
    sortable: true,
  },
  {
    id: 6,
    bold: '',
    normal: 'LINKS',
    name: 'links',
    translationId: 999,
    sortable: false,
  },
]

export enum ViewMode {
  'TABLE' = 'TABLE',
  'CARD' = 'CARD',
}
