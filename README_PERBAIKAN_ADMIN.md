# Perbaikan Tampilan Administrator ECODAS

Perubahan utama:
1. Memperbaiki layout admin agar sidebar tidak menimpa konten.
2. Merapikan navbar admin dan memperbaiki class CSS yang tidak cocok dengan JSX.
3. Menyederhanakan sidebar dan menghapus menu Sustainability Metrics yang duplikat dengan Dashboard.
4. Memperbaiki logout admin agar juga menghapus `ecodas_role` melalui AuthContext.
5. Merapikan dashboard admin: spacing, card, tabel, grafik, responsive mobile/tablet.
6. Memperbaiki halaman `/admin/decision` yang sebelumnya berisi komponen Settings; sekarang menjadi Decision Support yang sesuai Layer 5.

## File yang berubah
- src/pages/admin/AdminLayout.css
- src/pages/admin/AdminNavbar.css
- src/pages/admin/AdminSidebar.jsx
- src/pages/admin/AdminSidebar.css
- src/pages/admin/AdminDashboard.css
- src/pages/admin/L5_DecisionSupport.jsx

## Cara memasukkan ke repository lokal
Salin file-file di atas ke lokasi yang sama pada folder ECODAS lokal Anda, lalu commit dan push menggunakan GitHub Desktop.

Saran commit message:
`Rapikan tampilan administrator ECODAS`
