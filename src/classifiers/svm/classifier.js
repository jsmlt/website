// Standard imports
import jsmlt from '@jsmlt/jsmlt';

export const getKernel = (controls) => {
  if (controls.kernel === 'gaussian') {
    return new jsmlt.Kernel.Gaussian(10 ** controls.sigmaSquared);
  }

  if (controls.kernel === 'polynomial') {
    return new jsmlt.Kernel.Polynomial({
      degree: controls.degree,
      gamma: controls.gamma,
      coef0: controls.coef0,
    });
  }

  if (controls.kernel === 'sigmoid') {
    return new jsmlt.Kernel.Sigmoid({
      gamma: controls.gamma,
      coef0: controls.coef0,
    });
  }

  return new jsmlt.Kernel.Linear();
};

export default controls => (new jsmlt.Supervised.SVM.SVM({
  kernel: getKernel(controls),
  C: (10 ** controls.C),
}));
