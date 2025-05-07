import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router'

vi.mock('@/store/AuthStore', () => ({
  useAuthStore: vi.fn(),
}))

import { useAuthStore } from '@/store/authStore'
import RequireAuth from '@/components/auth-page/RequireAuth'

const mockUseAuthStore = vi.mocked(useAuthStore)

describe('RequireAuth', () => {
  afterEach(() => {
    vi.resetAllMocks()
    vi.restoreAllMocks()
  })

  it('показывает анимацию, пока идёт загрузка', () => {
    mockUseAuthStore.mockReturnValue({
      isLoading: true,
      isAuthenticated: false,
    })

    render(
      <MemoryRouter>
        <RequireAuth>
          <div>Content</div>
        </RequireAuth>
      </MemoryRouter>
    )

    expect(screen.getByRole('status')).toBeInTheDocument()
    expect(screen.queryByText('Content')).not.toBeInTheDocument()
  })

  it('Показывает дочерние элементы, если пользователь аутентифицирован', () => {
    mockUseAuthStore.mockReturnValue({
      isLoading: false,
      isAuthenticated: true,
    })

    render(
      <MemoryRouter>
        <RequireAuth>Protected Content</RequireAuth>
      </MemoryRouter>
    )
    expect(screen.getByText('Protected Content')).toBeInTheDocument()
  })

  it('Перенаправляет на домашнюю страницу (/), если пользователь не аутентифицирован', () => {
    mockUseAuthStore.mockReturnValue({
      isLoading: false,
      isAuthenticated: false,
    })

    render(
      <MemoryRouter initialEntries={['/home']}>
        <Routes>
          <Route
            path="/home"
            element={<RequireAuth redirectTo="/">Home Page</RequireAuth>}
          ></Route>

          <Route path="/" element={<div>Login Page</div>}></Route>
        </Routes>
      </MemoryRouter>
    )
    expect(screen.queryByText('Login Page')).toBeInTheDocument()
    expect(screen.queryByText('Home Page')).not.toBeInTheDocument()
  })
})
