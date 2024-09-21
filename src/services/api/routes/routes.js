export const routes = {
    baseRoute: {
        development: 'http://185.224.129.227:28080',
    },
    admin: {
        auth: {
            apRefreshToken: '/api/admin/auth/refresh_token',
            sendSmsToken: '/api/admin/auth/send_sms_token',
            verifySmsToken: '/api/admin/auth/verify_sms_token',
        },
        product: {
            products: '/api/admin/products',
            product: '/api/admin/products/{0}',
            productsDetails: '/api/admin/products/details',
            productDetails: '/api/admin/products/details/{0}'
        },
    }
}