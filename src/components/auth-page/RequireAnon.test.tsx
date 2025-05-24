import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router'

vi.mock('@/store/AuthStore', () => ({
  useAuthStore: vi.fn(),
}))

import { useAuthStore } from '@/store/useAuthStore'
import RequireAnon from '@/components/auth-page/RequireAnon'

const mockUseAuthStore = vi.mocked(useAuthStore)

describe('RequireAnon', () => {
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
        <RequireAnon>
          <div>Content</div>
        </RequireAnon>
      </MemoryRouter>
    )

    expect(screen.getByRole('status')).toBeInTheDocument()
    expect(screen.queryByText('Content')).not.toBeInTheDocument()
  })

  it('перенаправляет на /home, если пользователь аутентифицирован', () => {
    mockUseAuthStore.mockReturnValue({
      isLoading: false,
      isAuthenticated: true,
    })

    render(
      <MemoryRouter initialEntries={['/login']}>
        <Routes>
          <Route
            path="/login"
            element={
              <RequireAnon redirectTo="/home">
                <div>Login Page</div>
              </RequireAnon>
            }
          ></Route>

          <Route
            path="/home"
            element={<div data-testid="home">Home Page</div>}
          ></Route>
        </Routes>
      </MemoryRouter>
    )

    expect(screen.queryByText('Home Page')).toBeInTheDocument()
    expect(screen.queryByText('Login Page')).not.toBeInTheDocument()
  })

  it('показывает дочерние элементы, если пользователь не аутентифицирован', () => {
    mockUseAuthStore.mockReturnValue({
      isLoading: false,
      isAuthenticated: false,
    })

    render(
      <MemoryRouter>
        <RequireAnon>
          <div>Login Page</div>
        </RequireAnon>
      </MemoryRouter>
    )

    expect(screen.getByText('Login Page')).toBeInTheDocument()
  })
})
