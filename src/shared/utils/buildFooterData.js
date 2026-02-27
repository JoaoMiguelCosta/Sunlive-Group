// src/shared/utils/normalizeFooter.js
export function buildFooterData(
  rawFooter = {},
  groupFooter,
  defaultId = "footer"
) {
  const { InfoHeader, infoHeader, acknowledgements, id, ...rest } = rawFooter;

  return {
    ...rest,
    id: id || defaultId,
    infoHeader: infoHeader ?? InfoHeader ?? null,
    acknowledgements: acknowledgements ?? groupFooter?.acknowledgements ?? null,
  };
}
