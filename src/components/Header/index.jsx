import { FiLogOut } from 'react-icons/fi';

/* import { useAuth } from '../../hooks/auth'; */

import { Container, User } from './styles';

export function Header() {
    /* const { signOut, user } = useAuth(); */

    return (
        <Container>
            <h1>Menu</h1>
            <aside>
                <User>
                    <span>

                        Olá, <strong>{/* {user.name} */} Paulo</strong>
                    </span>

                </User>
            </aside>

            <button type="button" /* onClick={signOut} */>
                <FiLogOut size={24} />
            </button>
        </Container>
    );
};
