export const logger = (req, res, next) => {
    console.log(`${req.method} ${req.originalUrl} ${new Date().toLocaleTimeString('pt-BR', { timezone: 'America/Sao_Paulo' })}`)
    next()
}