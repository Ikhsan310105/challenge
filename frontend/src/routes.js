import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const barangView = React.lazy(() => import('./views/Barang/DataBarang'))
const barangAdd = React.lazy(() => import('./views/Barang/TambahBarang'))
const barangEdit = React.lazy(() => import('./views/Barang/EditBarang'))

const kasir = React.lazy(() => import('./views/Kasir/DataKasir'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/barang', name: 'Barang', element: barangView },
  { path: '/barang/tambah', name: 'Barang Tambah', element: barangAdd },
  { path: '/edit', name: 'Barang Edit', element: barangEdit },
  { path: '/kasir', name: 'Kasir', element: kasir },
]

export default routes
