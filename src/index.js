import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Horloge } from './Horloge/horloge';
import { ListeEtudiants } from './Etudiants/ListeEtudiant';
import { StatutClasse } from './Etudiants/StatutClasse';
import { AfficherRecettes } from './Recette/AfficherRecettes';
import { recette } from './Recette/recette';
import { etudiants } from './etudiants';

const horloge = 
{
  Heure: 23,
  Minutes: 54
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <ListeEtudiants etudiants={etudiants}/>
  <StatutClasse etudiants={etudiants}/>
  <Horloge horloge heure={"13"} minutes={"30"}/>
  <AfficherRecettes recette={recette}/>
  </>
);
