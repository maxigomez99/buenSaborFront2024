import React, { useState, Fragment } from "react"
import { Menu, Transition, Switch } from '@headlessui/react'
import { Moon, Sun, Menu as MenuIcon, LogOut, Edit, Plus } from "lucide-react"
import logo from '../../assets/img/cocinero.png'
interface CardItem {
  id: number;
  title: string;
  description: string;
  isActive: boolean;
}

const DashboardTemplate: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [items, setItems] = useState<CardItem[]>([
    { id: 1, title: "Item 1", description: "Description for Item 1", isActive: true },
    { id: 2, title: "Item 2", description: "Description for Item 2", isActive: false },
    { id: 3, title: "Item 3", description: "Description for Item 3", isActive: true },
  ])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  const handleCreate = () => {
    // Implement create functionality
    console.log("Create new item")
  }

  const handleEdit = (id: number) => {
    // Implement edit functionality
    console.log("Edit item", id)
  }

  const toggleActive = (id: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, isActive: !item.isActive } : item
    ))
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center sticky top-0 z-10">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Company Logo" className="h-8 w-auto" />
            <h1 className="text-xl font-bold">Buen Sabor</h1>
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

        {/* Main content */}
        <main className="flex-grow p-6">
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold">Items</h2>
            <button
              onClick={handleCreate}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <Plus className="h-5 w-5 inline-block mr-2" />
              Crear
            </button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <div key={item.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="text-blue-500 hover:text-blue-600 focus:outline-none"
                  >
                    <Edit className="h-5 w-5" />
                  </button>
                  <Switch
                    checked={item.isActive}
                    onChange={() => toggleActive(item.id)}
                    className={`${
                      item.isActive ? 'bg-blue-600' : 'bg-gray-200'
                    } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                  >
                    <span
                      className={`${
                        item.isActive ? 'translate-x-6' : 'translate-x-1'
                      } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                    />
                  </Switch>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export default DashboardTemplate