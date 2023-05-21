import {
  Add as AddRegular,
  AppsList as AppListRegular,
  Archive as ArchiveRegular
} from '@emotion-icons/fluentui-system-regular'
import {
  Add as AddFilled,
  AppsList as AppListFilled,
  Archive as ArchiveFilled
} from '@emotion-icons/fluentui-system-filled'

export const navList = (pathname) => [
  {
    initIcon: AppListRegular,
    finalIcon: AppListFilled,
    text: 'All'
  },
  {
    initIcon: AddRegular,
    finalIcon: AddFilled,
    text: pathname === '/add' ? 'Submit' : 'Add'
  },
  {
    initIcon: ArchiveRegular,
    finalIcon: ArchiveFilled,
    text: 'Archive'
  }
]
