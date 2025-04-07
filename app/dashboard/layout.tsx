import SideNav  from "../ui/dashboard/sidenav";

export default function Layout({children}: {children: React.ReactNode}){
    return (
        <div className="flex h-screen">
            <SideNav/>
            <main className="flex-1 p-4 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}