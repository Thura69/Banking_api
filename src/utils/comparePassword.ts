import bcrypt  from 'bcrypt';

export function comparePassword(candidatePassword: string, password: string) {
    return bcrypt.compare(candidatePassword,password)
}