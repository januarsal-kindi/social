import React from 'react'

type SidebarProps = {
    activeTab: string,
    onClickTab: (tab: string) => void
}
const Sidebar: React.FunctionComponent<SidebarProps> = (props: SidebarProps) => {
    const { activeTab, onClickTab } = props;
    return (
        <div className="h-full w-full text-left border-r-2 overflow-y-auto scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:bg-transparent overflow-hidden lg:top-18 bg-white mr-24 lg:mr-0">
            <nav className="px-1 pt-3 overflow-y-auto font-medium text-base sm:px-3 xl:px-5 lg:text-sm pb-10 lg:pt-3 lg:pb-14 sticky?lg:h-(screen-18)">
                <ul>
                    <li className="mt-8">
                        {/* <h5 className="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900">Getting started</h5> */}
                        <ul>
                            <li>
                                <a
                                    className={`px-3 py-2 transition-colors duration-200 relative block  ${activeTab == "posts" ? 'text-cyan-700' : 'hover:text-gray-900 text-gray-500'}`}
                                    onClick={(e) => onClickTab('posts')}
                                    >
                                    <span className="rounded-md absolute inset-0 bg-cyan-50"></span>
                                    <h5 className="relative text-xl">Posts</h5>
                                </a>
                            </li>
                            <li>
                                <a
                                    className={`px-3 py-2 transition-colors duration-200 relative block ${activeTab == "albums" ? 'text-cyan-700' : 'hover:text-gray-900 text-gray-500'}`}
                                    onClick={(e) => onClickTab('albums')}
                                    >
                                    <span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                                    <h5 className="relative text-xl">Albums</h5>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Sidebar