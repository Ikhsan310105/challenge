import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const barangView = React.lazy(() => import('./views/Barang/DataBarang'))
const barangAdd = React.lazy(() => import('./views/Barang/TambahBarang'))
const barangEdit = React.lazy(() => import('./views/Barang/EditBarang'))

const kasir = React.lazy(() => import('./views/Kasir/DataKasir'))

const tenan = React.lazy(() => import('./views/Tenan/DataTenan.js'))

const Struk = React.lazy(() => import('./views/Struk/LihatStruk'))

const transaksi = React.lazy(() => import('./views/Transaksi/FormTransaksi'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/barang', name: 'Barang', element: barangView },
  { path: '/barang/tambah', name: 'Barang Tambah', element: barangAdd },
  { path: '/edit', name: 'Barang Edit', element: barangEdit },
  { path: '/kasir', name: 'Kasir', element: kasir },
  { path: '/tenan', name: 'Kasir', element: tenan },
  { path: '/struk', name: 'Struk', element: Struk },
  { path: '/transaksi', name: 'Transaksi', element: transaksi },
]

export default routes
