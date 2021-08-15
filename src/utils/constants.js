export const infoLinks = [
  {
    path: '/support',
    label: 'support',
  },
  {
    path: '/contacts',
    label: 'contacts',
  },
  {
    path: '/terms-conditions',
    label: 'terms & conditions',
  },
]

export const navLinks = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'about',
    path: '/about',
  },
  {
    name: 'products',
    path: '/products',
  },
  {
    name: 'contact',
    path: '/contact',
  },
  {
    name: 'page',
    path: '/page',
  },
]


export const validationErrors = {
  name: {
    SpecialCharachters: 'Your name can\'t inlucde <,>,/,\\,@,$,#,),(,!,*',
    length: 'Your name must be greater than 3 character and less 20',
  },
  email: 'Please, Enter a valid email',
  phone: 'Please, Enter a valid phone',
  password: {
    length: 'Password must be at least 8 characters',
    lowerCase: 'Password must contains at least 1 small character',
    upperCase: 'Password must contains at least 1 Capital character',
    numbers: 'Password must contains at least 1 number',
    symbols: 'Password must contains at least 1 symbol',
    confirmed: 'It doesn\'t match with password',
  },
}
