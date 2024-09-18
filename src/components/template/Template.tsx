import React, { useState, Fragment } from "react"
import { Menu, Transition } from '@headlessui/react'
import { Moon, Sun, Menu as MenuIcon, X, LogOut, ChevronDown } from "lucide-react"

const DashboardTemplate: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isArticlesOpen, setIsArticlesOpen] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className={`min-h-screen w-full ${isDarkMode ? "dark" : ""}`}>
      <div className="flex bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen w-full">
        {/* Sidebar */}
        <aside
          className={`w-64 bg-gray-100 dark:bg-gray-800 p-4 fixed h-full z-20 transition-transform duration-300 ease-in-out lg:translate-x-0 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Menu</h2>
            <button onClick={toggleMenu} className="lg:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="space-y-2">
            <a href="#" className="block py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
              Estadísticas
            </a>
            <a href="#" className="block py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
              Empleados
            </a>
            <a href="#" className="block py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
              Pedidos
            </a>
            <div className="space-y-2">
              <button
                onClick={() => setIsArticlesOpen(!isArticlesOpen)}
                className="flex w-full justify-between items-center py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                Artículos
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isArticlesOpen ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {isArticlesOpen && (
                <div className="space-y-2 pl-4">
                  <a href="#" className="block py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                    Manufacturados
                  </a>
                  <a href="#" className="block py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                    Insumos
                  </a>
                </div>
              )}
            </div>
            <a href="#" className="block py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
              Promociones
            </a>
            <a href="#" className="block py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
              Categoría
            </a>
            <a href="#" className="block py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
              Unidad de Medida
            </a>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 flex flex-col min-h-screen lg:ml-64 w-full">
          {/* Header */}
          <header className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center sticky top-0 z-10 w-full">
            <div className="flex items-center space-x-4">
              <button onClick={toggleMenu} className="lg:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
                <MenuIcon className="h-6 w-6" />
              </button>
              <img src="/placeholder.svg" alt="Company Logo" className="h-8 w-auto" />
            </div>
            <div className="flex items-center space-x-4">
              <button onClick={toggleDarkMode} className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
                {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
              </button>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                    <img src="/placeholder.svg" alt="@user" className="h-8 w-8 rounded-full" />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                    <div className="px-4 py-3">
                      <p className="text-sm">Signed in as</p>
                      <p className="text-sm font-medium text-gray-900 truncate">john@example.com</p>
                    </div>
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={`${
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                            } flex px-4 py-2 text-sm`}
                          >
                            <LogOut className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </header>

          {/* Page content */}
          <div className="flex-grow p-6 w-full">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <p>Welcome to your dashboard. This is where your main content will go.</p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default DashboardTemplate