import { ReactNode } from 'react';
import { TypeOptions } from 'react-toastify';

export interface ILayoutProps {
	children: ReactNode,
	routerProps?: any,
	currentActiveItem?: string
}

export interface IToastProps {
	label: string;
	message: string;
	icon?: TypeOptions;
	type: TypeOptions;
	toastId?: string;
	autoClose?: number | false;
}
export interface INavigationItem {
	path: string,
	kind?: 'main',
	title?: string,
	component: React.LazyExoticComponent<any>,
	layout: ({ children }: ILayoutProps)=> JSX.Element
}

export interface IAPIResponse<T> {
	count: number,
	next: string | null,
	previous: string | null,
	results: T[]
}

export interface ISearchOption {
	value: string;
	label: string;
}