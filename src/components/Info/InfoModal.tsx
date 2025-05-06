import Modal from "react-modal";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/index";
import { setShowInstructions } from "../../store/gameSlice";

export const InfoModal = () => {
  const showInstructions = useSelector(
    (state: RootState) => state.game.showInstructions
  );
  const dispatch = useDispatch();
  return (
    <Modal
      isOpen={showInstructions}
      onRequestClose={() => dispatch(setShowInstructions(false))}
      contentLabel="Instrukcja do gry"
      className="ModalContent"
      overlayClassName="ModalOverlay"
    >
      <p>
        <strong>Instrukcje gry Connect Four:</strong>
      </p>
      <ul>
        <li>
          <strong>Celem gry:</strong> Ułóż cztery swoje pionki w jednej linii -
          poziomo, pionowo lub diagonalnie.
        </li>
        <li>
          <strong>Rozpoczęcie gry:</strong> Gra toczy się na planszy o wymiarach
          7x6. Gracze na zmianę umieszczają swoje pionki w kolumnach.
        </li>
        <li>
          <strong>Przyjmowanie ruchów:</strong> W swojej turze gracz wybiera
          jedną z siedmiu kolumn i wrzuca pionek na planszę. Pionek opada na
          najniższą dostępną wolną pozycję w danej kolumnie.
        </li>
        <li>
          <strong>Wygrać grę:</strong> Gracz, który pierwszy ułoży cztery pionki
          w jednej linii (poziomo, pionowo lub na przekątnej), wygrywa grę.
        </li>
        <li>
          <strong>Remis:</strong> Jeśli plansza zostanie zapełniona, a żaden z
          graczy nie ułoży czterech pionków w linii, gra kończy się remisem.
        </li>
        <li>
          <strong>Strategia:</strong> Pamiętaj, aby blokować przeciwnika i
          szukać okazji do stworzenia własnych linii czterech pionków.
        </li>
      </ul>
      <p>Powodzenia i miłej zabawy!</p>
      <button onClick={() => dispatch(setShowInstructions(false))}>Zamknij</button>
    </Modal>
  );
};
