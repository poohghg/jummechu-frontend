import { atom } from 'recoil'
import { IToast } from '@/shared/uiKit/organisms/Toast/model/model'

export const toastState = atom<IToast[]>({
	key: 'toastState',
	default: [],
})

export default {}