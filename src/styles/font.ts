type FontCfg = {
    lineHeight: string,
    fontWeight: string,
    letterSpacing?: string,
}

type FontScale = {
    [key: string]: [fontSize: string, configuration: FontCfg]
}


export const fonts: FontScale = {
    h700: ['56px', { lineHeight: '72px', fontWeight: '400' }],
    h600: ['40px', { lineHeight: '56px', fontWeight: '400', letterSpacing: '0.2px' }],
    h500: ['32px', { lineHeight: '44px', fontWeight: '400', letterSpacing: '0.1px' }],
    h400: ['24px', { lineHeight: '36px', fontWeight: '400', letterSpacing: '0.1px' }],
    h300: ['20px', { lineHeight: '28px', fontWeight: '400' }],

    bodyLg: ['18px', { lineHeight: '28px', fontWeight: '400' }],
    bodyBase: ['16px', { lineHeight: '24px', fontWeight: '400' }],
    bodySm: ['14px', { lineHeight: '20px', fontWeight: '400' }],

    label: ['12px', { lineHeight: '16px', fontWeight: '500', letterSpacing: '0.2px' }],
}