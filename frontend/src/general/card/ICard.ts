import { ICard } from "../../redux/reducer/general/card/ICard";

export interface ICardState extends ICard {
    card:ICard
}

export interface ICardProps extends ICardState {
}