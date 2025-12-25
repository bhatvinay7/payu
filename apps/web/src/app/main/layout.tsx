import Navbar from '../../components/nav-bar'
import SidebarController from '../../components/sidebar-controller';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`w-full h-full flex flex-col bg-slate-50 dark:bg-background transition-colors duration-300`}>
      <Navbar />
      <div className='relative flex-1 flex overflow-hidden'>
        <SidebarController />
        <main className='flex-1 h-full overflow-y-auto p-4 md:p-6 scroll-smooth'>
          {children}
        </main>
      </div>
    </div>
  );
}
