let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/WebProjects/CRUD/backend
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
set shortmess=aoO
badd +3 ~/WebProjects/CRUD/backend/src/auth/strategies/local.strategy.ts
badd +42 ~/WebProjects/CRUD/backend/src/auth/auth.service.ts
badd +6 ~/WebProjects/CRUD/backend/src/auth/guards/localAuth.guard.ts
badd +7 ~/WebProjects/CRUD/backend/src/auth/auth.controller.ts
badd +3 ~/WebProjects/CRUD/backend/src/auth/dto/credential.dto.ts
badd +21 ~/WebProjects/CRUD/backend/src/auth/auth.module.ts
badd +1 ~/WebProjects/CRUD/backend/src/auth/dto/token.dto.ts
badd +16 src/user/entities/user.entity.ts
badd +5 src/auth/entities/credential.entity.ts
badd +0 src/auth/ser
badd +8 ~/WebProjects/CRUD/backend/src/user/dto/createUser.dto.ts
badd +31 ~/WebProjects/CRUD/backend/src/user/user.service.ts
badd +11 ~/WebProjects/CRUD/backend/src/user/user.module.ts
badd +11 ~/WebProjects/CRUD/backend/src/user/user.controller.ts
argglobal
%argdel
edit ~/WebProjects/CRUD/backend/src/auth/auth.service.ts
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 30 + 67) / 135)
exe 'vert 2resize ' . ((&columns * 104 + 67) / 135)
argglobal
enew
file NvimTree_1
setlocal fdm=manual
setlocal fde=nvim_treesitter#foldexpr()
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal nofen
wincmd w
argglobal
balt ~/WebProjects/CRUD/backend/src/auth/auth.module.ts
setlocal fdm=expr
setlocal fde=nvim_treesitter#foldexpr()
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
12
normal! zo
13
normal! zo
50
normal! zo
19
normal! zo
23
normal! zo
29
normal! zo
37
normal! zo
41
normal! zo
44
normal! zo
46
normal! zo
47
normal! zo
53
normal! zo
58
normal! zo
60
normal! zo
let s:l = 42 - ((19 * winheight(0) + 15) / 31)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 42
normal! 05|
wincmd w
2wincmd w
exe 'vert 1resize ' . ((&columns * 30 + 67) / 135)
exe 'vert 2resize ' . ((&columns * 104 + 67) / 135)
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let &winminheight = s:save_winminheight
let &winminwidth = s:save_winminwidth
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
nohlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
